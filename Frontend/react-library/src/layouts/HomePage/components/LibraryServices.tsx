import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const LibraryServices = () => {

    const { authState } = useOktaAuth();

    return(
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                    <h1 className='fw-bold'>
                        Không thể tìm thấy những gì bạn đang tìm kiếm?
                    </h1>
                    <p className='lead'>
                        Nếu bạn không thể tìm thấy những gì bạn đang tìm kiếm, 
                        hãy gửi tin nhắn cá nhân cho quản trị viên thư viện của chúng tôi!
                    </p>
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        {authState?.isAuthenticated ? 
                        <Link to='/messages' type='button' className='btn main-color btn-lg text-white'>
                            Dịch vụ thư viện
                        </Link>   
                        :
                        <Link className='btn main-color btn-lg text-white' to='/login'>
                            Đăng nhập
                        </Link> 
                    }

                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'></div>
            </div>
        </div>
    );
}