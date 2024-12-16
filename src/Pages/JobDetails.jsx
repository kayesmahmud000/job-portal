import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job=useLoaderData()
    console.log(job)
    const { title,
        location,
        jobType,
        category,
        applicationDeadline
        , company, company_logo,
        description,
        hr_email,
        hr_name, requirements,
        responsibilities, salaryRange,

    } = job
    return (
        <div className='h-[700px] '>
             <div className=" bg-base-100 max-w-xl  mx-auto  p-7 my-4 shadow-xl">
                <figure className="flex items-center gap-2 ">
                    <img
                        src={company_logo} className="w-16"
                        alt="Shoes" />
                    <div>
                        <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer"> {company}</h2>
                        <p><small className="flex gap-1 items-center text-gray-400"><CiLocationOn></CiLocationOn> {location}</small></p>
                    </div>
                </figure>
                <div className="">
                    <div>
                    <h2 className="card-title hover:text-blue-600">{title}</h2>
                    <p className="text-gray-400">{jobType}</p>
                    </div>
                    <p>{description}</p>
                    <div className="flex gep-4 my-2 flex-wrap">
                        {
                            requirements.map((req, idx)=><p className=" text-xs border rounded hover:bg-blue-50 hover:text-blue-400 p-1" key={idx}>{req}</p>)
                        }
                    </div>
                    <div className=" flex justify-between items-center mt-5">
                        <p className="">${salaryRange.min} -{salaryRange.max} {salaryRange.currency}</p>
                       <Link to={`/applyJob/${job._id}`}> <button className="btn bg-blue-400 text-white hover:text-black ">Apply now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;