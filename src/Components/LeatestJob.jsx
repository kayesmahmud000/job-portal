import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const LeatestJob = () => {
    const [jobs,  setJobs]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/allJobs")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    console.log(jobs)
    return (
        <div>

            <div>
                <h2 className='lg:text-5xl font-bold text-center'>Jobs of the day</h2>
                <p className='text-center'>Search and connect with the right candidates faster.</p>
            </div>
            <div className='grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job =><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default LeatestJob;