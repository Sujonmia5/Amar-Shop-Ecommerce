import React from 'react';
import SideTable1 from '../../../asset/side-table-1.png'
import SideTable2 from '../../../asset/Mask group.png'
import { Link } from 'react-router-dom';

const HomeTable = () => {
    return (
        <div className="hero bg-[#FAF4F4]">
            <div className="hero-content flex-col lg:flex-row md:px-[100px] py-14 gap-14">
                <div className="card w-auto sm:w-96 h-96 shadow-xl bg-transparent border">
                    <figure>
                        <img className='max-w-[300px] sm:max-w-sm -mb-16 -ml-4' src={SideTable1} alt="Shoes" />
                    </figure>
                    <div className="card-body font-serif">
                        <h2 className="card-title text-1xl">
                            Side Table
                        </h2>
                        <Link to='' className='hover:underline hover:underline-offset-4 hover:text-red-600'>View More</Link>

                    </div>
                </div>
                <div className="card w-auto sm:w-96 h-96 shadow-xl bg-transparent border">
                    <figure>
                        <img className='max-w-[300px] sm:max-w-sm -mb-16 -ml-4' src={SideTable2} alt="Shoes" />
                    </figure>
                    <div className="card-body pt-20 font-serif">
                        <h2 className="card-title text-1xl">
                            Side Table
                        </h2>
                        <Link to='/categories/sidetable' className='hover:underline hover:underline-offset-4 hover:text-red-600'>View More</Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeTable;