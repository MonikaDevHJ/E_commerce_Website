import React from 'react'
const subTitle = "Save The day";
const title =(
    <h2 className='title'>Join on Day long Free WorkShop For <b>Advance  <span>Mastering </span> </b> On Sales </h2>
)

const desc =" Limited Time Offer! Huurry Up "

const Registeer = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-col-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtile'>
                            {subTitle}

                        </span>
                        {title}
                        <p>{desc}</p>

                    </div>
                    <div className='col'>
                       <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-from'>
                            <input type="text" name="name" placeholder='UserName' className='reg-input' />
                            <input type="email" name="email" placeholder='Email' className='reg-input' />
                            <input type="number" name="number" placeholder='Phone' className='reg-input' />
                           <button type="submit" className='lab-btn'>Register Now</button>

                        </form>


                       </div>
                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Registeer
