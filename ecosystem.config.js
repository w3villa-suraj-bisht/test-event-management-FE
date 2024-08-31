module.exports = {
    apps : [{
      name: 'test-management-FE',
      script: "PORT=3001 npm start",
    }],
     
    // Deployment Configuration
    deploy : {
        staging : {
          "user" : "w3villa",
          "host" : "4.186.57.96",
          "ref"  : "origin/base-setup",
          "repo" : "git@github.com:w3villa-suraj-bisht/test-event-management-FE.git",
          "path" : "/home/w3villa/test-event-management-FE",
          'post-deploy': 'cd /home/w3villa/test-event-management-FE/current && npm i && pm2 reload ecosystem.config.js --env staging   ', 
          env: {
            NODE_ENV: 'staging', 
          },
         }
    }
  };