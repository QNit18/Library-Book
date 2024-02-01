import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {

    const { authState } = useOktaAuth();

    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Bạn đã đọc những gì?</h1>
                            <p className='lead'>
                                Nhóm thư viện rất muốn biết bạn đã đọc gì. 
                                Cho dù đó là để học một kỹ năng mới hay phát triển một kỹ năng mới, 
                                chúng tôi đều có thể cung cấp nội dung hàng đầu cho bạn!
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Khám phá những cuốn sách hàng đầu</Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Đăng nhập</Link>
                            }  
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Bộ sưu tập của chúng tôi luôn thay đổi!</h1>
                            <p className='lead'>
                                Hãy cố gắng kiểm tra hàng ngày vì bộ sưu tập của chúng tôi luôn thay đổi! 
                                Chúng tôi làm việc không ngừng nghỉ để cung cấp lựa chọn sách chính xác nhất có thể 
                                cho học sinh Luv 2 Read của chúng tôi! Chúng tôi rất siêng năng trong việc lựa chọn sách của mình 
                                và sách của chúng tôi luôn là ưu tiên hàng đầu của chúng tôi.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Khám phá những cuốn sách hàng đầu</Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Đăng nhập</Link>
                        }
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most accurate book selection possible 
                                for our Luv 2 Read students! We are diligent about our book selection 
                                and our books are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}