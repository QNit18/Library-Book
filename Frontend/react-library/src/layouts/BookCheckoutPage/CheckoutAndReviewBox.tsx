// CheckoutAndReviewBox.tsx
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";
import { LeaveAReview } from "../Utils/LeaveAReview";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean, 
    currentLoansCount: number, isAuthenticated: any, isCheckedOut: boolean, 
    checkoutBook: any, isReviewLeft: boolean, submitReview: any }> = (props) => {

    const [canLeaveReview, setCanLeaveReview] = useState(false);

    useEffect(() => {
        if (props.isAuthenticated && props.isCheckedOut) {
            setCanLeaveReview(true);
        } else {
            setCanLeaveReview(false);
        }
    }, [props.isAuthenticated, props.isCheckedOut]);

    function buttonRender() {
        if (props.isAuthenticated) {
            if (!props.isCheckedOut && props.currentLoansCount < 5) {
                return (<button onClick={() => props.checkoutBook()} className='btn btn-success btn-lg'>Checkout</button>)
            } else if (props.isCheckedOut) {
                return (<p><b>Sách đã được kiểm tra. Thưởng thức!</b></p>)
            } else if (!props.isCheckedOut) {
                return (<p className='text-danger'>Đã kiểm tra quá nhiều sách.</p>)
            }
        }
        return (<Link to={'/login'} className='btn btn-success btn-lg'>Đăng nhập</Link>)
    }

    function reviewRender() {
        if (props.isAuthenticated && !props.isReviewLeft && canLeaveReview) {
            return (
                <p>
                    <LeaveAReview submitReview={props.submitReview} canLeaveReview={canLeaveReview}/>
                </p>
            );
        } else if (props.isAuthenticated && props.isReviewLeft) {
            return (
                <p>
                    <hr />
                    <b>Cám ơn vì phản hồi của bạn!</b>
                </p>
            );
        } else {
            if (props.isAuthenticated && !canLeaveReview) {
                return (
                    <p>
                        <hr />
                        <b>Thanh toán để có thể để lại đánh giá.</b>
                    </p>
                );
            } else {
                return (
                    <div>
                        <hr/>
                        <b>Đăng nhập để có thể để lại đánh giá.</b>
                    </div>
                );
            }
        }
    }

    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b>{props.currentLoansCount}/5 </b>
                        sách đã được kiểm tra
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className='text-success'>
                            Có sẵn
                        </h4>
                        :
                        <h4 className='text-danger'>
                            Danh sách chờ
                        </h4>
                    }
                    <div className='row'>
                        <p className='col-6 lead'>
                            <b>{props.book?.copies} </b>
                            bản sao
                        </p>
                        <p className='col-6 lead'>
                            <b>{props.book?.copiesAvailable} </b>
                            có sẵn
                        </p>
                    </div>
                </div>
                {buttonRender()}
                <hr />
                <p className='mt-3'>
                    Con số này có thể thay đổi cho đến khi việc đặt hàng hoàn tất.
                </p>
                {reviewRender()}
            </div>
        </div>
    );
}
