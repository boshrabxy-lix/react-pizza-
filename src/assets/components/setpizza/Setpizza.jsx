import React from 'react';
import getpizza from '../../components/getpizza/Getpizza';
import axios from 'axios';

export default function Setpizza() {
  return (
   <section className='posts'>
            <div className='container'>
                <div className='row'>
                    {posts.map( post=> {
                        return <div className='col-md-4'>
                            <div className='post'>
                                  
                            </div>
                        </div>
                    } )}
                </div>
            </div>
        </section>
  )
}
