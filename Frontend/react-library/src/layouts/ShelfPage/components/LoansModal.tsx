import ShelfCurrentLoans from "../../../models/ShelfCurrentLoans";

export const LoansModal: React.FC<{ shelfCurrentLoan: ShelfCurrentLoans, mobile: boolean, returnBook: any,
    renewLoan: any }> = (props) => {
    return (
        <div className='modal fade' id={props.mobile ? `mobilemodal${props.shelfCurrentLoan.book.id}` : 
            `modal${props.shelfCurrentLoan.book.id}`} data-bs-backdrop='static' data-bs-keyboard='false' 
            aria-labelledby='staticBackdropLabel' aria-hidden='true' key={props.shelfCurrentLoan.book.id}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='staticBackdropLabel'>
                                Tùy chọn
                            </h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='container'>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            {props.shelfCurrentLoan.book?.img ?
                                                <img src={props.shelfCurrentLoan.book?.img} 
                                                    width='56' height='87' alt='Book'/>
                                                :
                                                <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')} 
                                                    width='56' height='87' alt='Book'/>
                                            }
                                        </div>
                                        <div className='col-10'>
                                            <h6>{props.shelfCurrentLoan.book.author}</h6>
                                            <h4>{props.shelfCurrentLoan.book.title}</h4>
                                        </div>
                                    </div>
                                    <hr/>
                                    {props.shelfCurrentLoan.daysLeft > 0 && 
                                        <p className='text-secondary'>
                                            Hạn chót trong {props.shelfCurrentLoan.daysLeft} ngày.
                                        </p>
                                    }
                                    {props.shelfCurrentLoan.daysLeft === 0 && 
                                        <p className='text-success'>
                                             Hạn chót hôm nay.
                                        </p>
                                    }
                                    {props.shelfCurrentLoan.daysLeft < 0 && 
                                        <p className='text-danger'>
                                            Quá hạn {props.shelfCurrentLoan.daysLeft} ngày.
                                        </p>
                                    }
                                    <div className='list-group mt-3'>
                                        <button onClick={() => props.returnBook(props.shelfCurrentLoan.book.id)} 
                                           data-bs-dismiss='modal' className='list-group-item list-group-item-action' 
                                           aria-current='true'>
                                            Trả sách
                                        </button>
                                        <button onClick={
                                            props.shelfCurrentLoan.daysLeft < 0 ? 
                                            (event) => event.preventDefault() 
                                            :
                                            () => props.renewLoan(props.shelfCurrentLoan.book.id)
                                        } 
                                            data-bs-dismiss='modal' 
                                            className={
                                                props.shelfCurrentLoan.daysLeft < 0 ? 
                                                'list-group-item list-group-item-action inactiveLink' : 
                                                'list-group-item list-group-item-action'
                                            }>
                                            {props.shelfCurrentLoan.daysLeft < 0 ? 
                                            'Trễ hạn không thể được gia hạn' : 'Gia hạn khoản vay trong 7 ngày'    
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}