// LeaveAReview.tsx
import { useState } from 'react';
import { StarsReview } from './StarsReview';

export const LeaveAReview: React.FC<{ submitReview: any, canLeaveReview: boolean }> = (props) => {
    const [starInput, setStarInput] = useState(0);
    const [displayInput, setDisplayInput] = useState(false);
    const [reviewDescription, setReviewDescription] = useState('');

    function starValue(value: number) {
        setStarInput(value);
        setDisplayInput(true);
    }

    const starButtons = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    return (
        <div className='dropdown' style={{ cursor: 'pointer' }}>
            <h5 className='dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown'>
                {props.canLeaveReview ? 'Để lại một đánh giá' : 'Reviews'}
            </h5>
            <ul id='submitReviewRating' className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                {starButtons.map((value, index) => (
                    <li key={index}>
                        <button onClick={() => starValue(value)} className='dropdown-item'>
                            {value} sao
                        </button>
                    </li>
                ))}
            </ul>
            <StarsReview rating={starInput} size={32}/>

            {props.canLeaveReview && displayInput && 
                <form method='POST' action='#'>
                    <hr/>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Đánh giá về sách:
                        </label>
                        <textarea
                            className='form-control'
                            id='submitReviewDescription'
                            placeholder='Không bắt buộc'
                            rows={3}
                            onChange={e => setReviewDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type='button'
                            onClick={() => props.submitReview(starInput, reviewDescription)}
                            className='btn btn-primary mt-3'
                        >
                            Gửi đánh giá
                        </button>
                    </div>
                </form>
            }

        </div>
    );
}
