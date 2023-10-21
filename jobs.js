var jobs = [
        { type : 'Web developer', duration: '8 months'},
        { type : 'Web designer', duration: '6 months'},
        { type : 'Data scientist', duration: '5 months'},
        { type : 'Machine Learning', duration: '7 months'}
    ];

function showJobs() {
    jobs.forEach((job) => {
        console.log(`Job: ${job.type}, duration: ${job.duration} \n`);
    });
};

//# Esportazione base
//module.exports.showJobs = showJobs;

//# Esportazioni dirette
//module.exports = showJobs;
//showJobs();

//# Esportazione multipla
/* module.exports = {
    data: jobs,
    getData: showJobs
};
 */