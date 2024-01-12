import Sequelize from 'sequelize';

const sequelize = new Sequelize('test_node', 'root', '188807397', {
  host: 'localhost',
  dialect:'mysql'
})



const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull:false,
  },
  age: {
    type: Sequelize.INTEGER(3),
    allowNull:false
  }
}, { tableName: 'users', timestamps: false })


async function createUser(name,age) {
  const user = await User.create({name,age})

  return user.toJSON()
  
}

async function findAllUsers() {
  const users = await User.findAll()

  return users.map((user)=>user.toJSON())
}

async function findUserById(id) {
  const user = await User.findByPk(id);
  return user?.toJSON()
}

async function updateUser(id, name, age) {
  const user = await User.findByPk(id);

  if (user) {
    user.name = name
    user.age = age
    await user.save()
    console.log(user.toJSON());
  } else {
    console.log('user not found');
  }

  return user
}

async function deleteUser(id) {
  const user = await User.findByPk(id)
  
  if (user) {
    await user.destroy()
    console.log('User deleted')
  } else {
    console.log('User not found')
  }
  return user
}


export const UserDb = {
   User,
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
}