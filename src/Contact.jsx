import React,{useState} from "react";
const Contact=()=>{
    const [data,setData] =useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        }); 
    };
    const fromsubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname}`);

    };
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>

            </div>
            <div className="container contact_div">
                <div>

                     <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={fromsubmit}>
                            <div className="mb-3">
                                <lebal for="example1" className="form-label">
                                    Phone
                                </lebal>
                                <input type="number" className="form-control" id="example1" name="phone" value={data.phone} onChange={InputEvent}  placeholder="mobile number" />

                            </div>
                            <div className="mb-3">
                                <lebal for="example2" className="form-label">
                                    Email address
                                </lebal>
                                <input type="email" className="form-control" id="example2" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com" />

                            </div>
                            <div className="mb-3">
                                <lebal for="example3" className="form-label">
                                    message
                                </lebal>
                                <textarea type="email" className="form-control" id="example3"
                                 row="3" name="masage" value={data.msg} onChange={InputEvent}  placeholder="name@example.com"></textarea> 

                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">submit from</button>

                            </div>
                        </form>
   
                    </div>
                </div>

            </div>
        </>

    )
};
export default Contact;