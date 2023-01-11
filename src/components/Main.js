import img1 from '../assets/logo.jpg';
const Main = () => {

    return (
        <div class="container-fluid">
            <div class="row ">
                <div class="col-md-6 text-center">
                    <img src={img1} width="50%"></img>
                </div>
                <div class="col-md-6 text-center">
                    <div class="container">
                        <h1 class="mt-4">สมัครสมาชิก</h1>
                        <h3>กรอกข้อมูลด้านล่างให้ครบถ้วน</h3>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup1">ชื่อผู้ใช้</span>
                            <input type="text" class="form-control" aria-label="Sizing1" aria-describedby="inputGroup1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup1">อีเมล</span>
                            <input type="text" class="form-control" aria-label="Sizing1" aria-describedby="inputGroup1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup1">เบอร์มือถือ</span>
                            <input type="text" class="form-control" aria-label="Sizing1" aria-describedby="inputGroup1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup1">รหัสผ่าน</span>
                            <input type="text" class="form-control" aria-label="Sizing1" aria-describedby="inputGroup1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup1">ยืนยันรหัสผ่าน</span>
                            <input type="text" class="form-control" aria-label="Sizing1" aria-describedby="inputGroup1" />
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">สมัครสมาชิก</button>
                        </div>
                        <button type="button" class="btn btn-success mt-2">เข้าสู่ระบบ</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main