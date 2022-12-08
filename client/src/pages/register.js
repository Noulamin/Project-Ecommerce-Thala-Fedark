// import React, { useRef } from 'react'
import Submit from '../components/submit'


const register = () => {


    return (
        <>
            <div class="contain py-16">
                <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <form action="#" method="post" autocomplete="off">
                        <div class="space-y-2">
                            <div className='d-flex justify-content-between'>
                                <div >
                                    <label for="name" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>First Name</label>
                                    <input type="text" name="name" id="name"
                                        class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Enter Your First Name" />
                                </div>
                                <div>
                                    <label for="name" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Last Name</label>
                                    <input type="text" name="name" id="name"
                                        class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Enter Your Last Name" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Email address</label>
                                <input type="email" name="email" id="email"
                                    class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <label for="password" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Password</label>
                                    <input type="password" name="password" id="password"
                                        class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="*******" />
                                </div>
                                <div>
                                    <label for="confirm" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Confirm password</label>
                                    <input type="password" name="confirm" id="confirm"
                                        class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="*******" />
                                </div>
                            </div>
                            <div>
                                <label for="name" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Phone Number</label>
                                <input type="text" name="name" id="name"
                                    class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div>
                                <label for="name" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Adresse</label>
                                <input type="text" name="name" id="name"
                                    class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div>
                                <label for="name" class="text-gray-600 mb-2 block" style= {{ fontSize : '14px' }}>Ville</label>
                                <input type="text" name="name" id="name"
                                    class="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class="flex items-center">
                                <input type="checkbox" name="aggrement" id="aggrement"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                    href="#" class="text-primary">terms & conditions</a></label>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button type="submit"
                                class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                                account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default register