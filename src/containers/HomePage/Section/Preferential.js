import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Preferential() {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    // let dem = 1;
    return (
        <div className="voucher row bg-white mt-3 pt-3 p-2 m-0">
            {/* {preferent.map((pref) => {
                if (dem <= 12) {
                    dem++; */}
                    {/* return (
                        <> */}
                            <div className="col-md-1 col-3 p-1 text-center" style={{ cursor: 'pointer' }}>
                                <Link to="*">
                                    <img className="w-50" src="https://salt.tikicdn.com/cache/w100/ts/upload/8e/da/23/b48fcdccbdfda229af56c223eb0810d1.png.webp" alt="" />
                                    <p className="small mt-2 mb-0 text-dark">abcd</p>
                                </Link>
                            </div>
                        {/* </> */}
            {/* //         );
            //     }
            //     else { */}
                    {/* return null
               }
            })} */}
        </div>
    );
}
