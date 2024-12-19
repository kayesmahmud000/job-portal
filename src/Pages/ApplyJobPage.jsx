import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2'

const ApplyJobPage = () => {
    const {id} =useParams()
    const {user}= useAuth()
    const navigate =useNavigate()
console.log(id)
    const handleApplyJob=e=>{
        e.preventDefault()
        const form =e.target
        const linkIn =form.linkIn.value
        const gitHub =form.gitHub.value
        const resume =form.resume.value
        console.log( linkIn ,gitHub, resume)
        const applicationJob= {
            job_id: id,
            applicant_email:user.email,
            resume,
            linkIn,
            gitHub

        }

        fetch('http://localhost:5000/job-application',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(applicationJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    title: 'Success!',
                    text: 'Application Added successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                   heightAuto:true
                  })
               navigate("/myJob")  
            }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-2xl mx-auto my-10  shadow-2xl">
                <h1 className='lg:text-5xl font-bold text-center'>Apply the Job</h1>
                <form onSubmit={handleApplyJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkIn Url</span>
                        </label>
                        <input type="url" name='linkIn' placeholder="linkIn url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GitHub Url</span>
                        </label>
                        <input type="url" name='gitHub' placeholder="gitHub url" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume Url</span>
                        </label>
                        <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyJobPage;