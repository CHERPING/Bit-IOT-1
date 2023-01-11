import './FormComponent.css'
import {useState} from "react"
const FormComponent = ()=>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPhoneNumber,setErrorPhoneNumber] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [phoneNumberColor,setPhoneNumberColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRepasswordColor] = useState('')

    const validateForm = (e) =>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้ให้มากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('กรุณาใส่ (@hotmail.com another)')
            setEmailColor('red')
        }

        if(phoneNumber.length>10){
            setErrorPhoneNumber('')
            setPhoneNumberColor('green')
        }else{
            setErrorPhoneNumber('กรุณาใส่เบอร์โทรให้ครบ')
            setPhoneNumberColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('กรูณาใส่รหัสให้มากกว่า 8 ขึ้นไป')
            setPasswordColor('red')
        }

        if(repassword !== "" && repassword === password){
            setErrorRePassword('')
            setRepasswordColor('green')
        }else{
            setErrorRePassword('กรุณาใส่รหัสให้ตรงกัน')
            setRepasswordColor('red')
        }

    }

    return(
        <div className="container">
            
            <form className="form" onSubmit={validateForm}>
                <h1>สมัครสมาชิก</h1>
                <h3>กรอกข้อมูลด้านล่างให้ครบถ้วน</h3>
                <div className="form-control">
                    {/* <label>Username</label> */}
                    <input type="text" placeholder='ชื่อผู้ใช้' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    {/* <label>Email</label> */}
                    <input type="text" placeholder='อีเมล' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    {/* <label>Email</label> */}
                    <input type="text" placeholder='เบอร์มือถือ' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} style={{borderColor:phoneNumberColor}}/>
                    <small style={{color:phoneNumberColor}}>{errorPhoneNumber}</small>
                </div>
                <div className="form-control">
                    {/* <label>Password</label> */}
                    <input type="password" placeholder='รหัสผ่าน' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small  style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    {/* <label>Confirm Password</label> */}
                    <input type="password" placeholder='ยืนยันรหัสผ่าน' value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                    <small  style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button className='btn-regis' type='submit'>สมัครสมาชิก</button>
                <button className='btn-login' type='submit'>เข้าสู่ระบบ</button>
            </form>

        </div>

        
    )
}
export default FormComponent