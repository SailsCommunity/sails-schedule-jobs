/**
 * Default jobs configuration
 * (sails.config.jobs)
 *
 * For more information using agenda in your app, check out:
 * https://github.com/vbuzzano/sails-hook-jobs
 */
module.exports.jobs = {

    // Define the directory where jobs are stored
    "jobsDirectory": "api/jobs",

    "db": {
        "address"	 : "localhost:27017",
        "collection" : "sailsjobs"
    },
    "name": "SailsJs Jobs",
    "processEvery": "10 seconds",
    "maxConcurrency": 20,
    "defaultConcurrency": 10,
    "defaultLockLifetime": 10000
};