
import './App.css'
import { useForm   } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
  setError,
    watch,
    formState: { errors,   isSubmitting  },
  } = useForm()



// const delay= (d)=>{
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
// resolve()
//     }, d*1000)
//   })

// }

  const onSubmit=async (data) => {


    // await delay(2)

    let r = await fetch("http://localhost:3000/" , {method:"POST" ,  
  body: JSON.stringify(data)} )
    let res = await r.text(data)
    
    console.log(data, res)



  //   if(data.username !== "owais ali"){
  //     setError("forms" , {message:"credential are invalid"})
  //   }
  //  if(data.username === "Alii"){
  //     setError("blocked" , {message:"sorry this user is blocked"})
  //   }
  
  }

  return (
    <>

    {isSubmitting && <div>Loading.....</div>}
    <form  onSubmit={handleSubmit(onSubmit)} action="">
    <input  {...register("username", { required:{value:true, message:"This field is required"}, minLength:{value:3, message: "min length is 3"}, maxLength :{value: 12, message:"max length is 12"}})} type="text" placeholder='enter name'  />
    {errors.username && <span>{errors.username.message}</span>}
    <input  {...register("password", { required: true , minLength: 5, maxLength:12 })} type="password" placeholder='enter pass' />
    {errors.password && <span>This is a required field</span>}
    <input disabled={isSubmitting} type="submit" value="submit" />

<br />
{errors.forms && <span>{errors.forms.message}</span>}
{errors.blocked && <span>{errors.blocked.message}</span>}

    </form>
    </>
  )
}

export default App
