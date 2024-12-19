import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VewApplication = () => {
    const applications = useLoaderData()

    const handleStatus= (e, id)=>{
        console.log(e.target.value , id)
        const data ={ status: e.target.value}
        fetch(`http://localhost:5000/job-application/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div>
            Application hare{applications.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map((application, i) => <tr key={i} className="bg-base-200">
                                <th>{i + 1}</th>
                                <td>{application.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td><select 
                                onChange={(e)=>handleStatus(e, application._id)}
                                defaultValue={"Change status"}

                                    className="select select-bordered select-xs w-full max-w-xs">
                                    <option disabled>Change Status</option>
                                    <option>Under Review</option>
                                    <option>Interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VewApplication;