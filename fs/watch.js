import fs from 'fs';


fs.watch('./', { recursive: true }, (eventType,filename) => {
    console.log(`File '${filename}' has changed: ${eventType}`);
})