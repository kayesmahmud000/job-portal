import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyAddedJob = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/allJobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text2xl font-bold text-center my-5 '>My Jobs {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count </th>
                            <th>Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) =><tr>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplication/${job._id}`}><button className='btn btn-link'>View Application</button></Link>
                                </td>
                              </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedJob;