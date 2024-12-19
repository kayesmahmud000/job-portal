import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";


const AddJobPage = () => {
    const {user}=useAuth()
    const navigate =useNavigate()
const handleAddJob = e => {
  e.preventDefault()
 const formData = new FormData(e.target)
 const initialData= Object.fromEntries(formData.entries())
 console.log(initialData)

 const {min ,max , currency, ...newJob}=initialData
 newJob.salaryRange ={min , max ,currency}
  newJob.requirements= newJob.requirements.split("\n")
  newJob.responsibilities= newJob.responsibilities.split('\n')
 console.log(newJob)
fetch("http://localhost:5000/jobs", {
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(newJob)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
       if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        title: 'Success!',
                        text: 'Job Added successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                       heightAuto:true
                      })
                      navigate("/") 
                }
})
}

    return (
        <div className="container mx-auto my-10">
            <div className="card bg-base-100 w-full  shadow-2xl">
                <h1 className="text-5xl font-bold my-4 text-center mx-4">Add Your Job</h1>
                <form onSubmit={handleAddJob} className="card-body ">
                    {/* job name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='title' placeholder=" job title" className="input input-bordered" required />
                    </div>
                    {/* job location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text " name='location' placeholder=" job location" className="input input-bordered" required />

                    </div>
                    {/* job type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job type</span>
                        </label>
                        <select defaultValue={"Pick the Job type"} name='type' className="select select-bordered w-full ">
                            <option disabled>Pick the Job type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Intern</option>
                        </select>

                    </div>
                    {/* job category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={"Pick the Job category"} name='category' className="select select-bordered w-full ">
                            <option disabled>Pick the Job category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>

                            <input type="text " name='min' placeholder=" min" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <input type="text " name='max' placeholder=" max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select defaultValue={"Currency"} name='currency' className="select select-bordered w-full " required >
                                <option disabled>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>INR</option>
                            </select>
                        </div>

                    </div>

                    {/* job description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>

                        <textarea name='description' className="textarea textarea-bordered" placeholder="description" required></textarea>
                    </div>
                    {/* job requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requirements</span>
                        </label>

                        <textarea name='requirements' className="textarea textarea-bordered" placeholder="Put each requirements in a new line" required></textarea>
                    </div>
                    {/* job responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Responsibilities</span>
                        </label>

                        <textarea name='responsibilities' className="textarea textarea-bordered" placeholder="Put each responsibilities in a new line" required></textarea>
                    </div>
                    {/* job company */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">company</span>
                        </label>
                        <input type="text " name='company' placeholder=" job company" className="input input-bordered" required />

                    </div>
                    {/* job location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hr email</span>
                        </label>
                        <input defaultValue={user?.email} type="email " name='hr_email' placeholder=" hr email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hr name</span>
                        </label>
                        <input defaultValue={user?.name} type="text " name='hr_name' placeholder=" hr name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company logo</span>
                        </label>
                        <input type="text " name='company_logo' placeholder=" company logo" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddJobPage;