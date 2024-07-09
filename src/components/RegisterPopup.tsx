const hide = () => {
    const modal = document.getElementById('crypto-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-modal', 'false');
    }
}


export const RegisterPopup = () => {
    return (
        <div >
            <div id="crypto-modal" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Registration
                            </h3>
                            <button type="button" onClick={hide} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                                X
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Register here With your catagory
                            </p>
                            <ul className="my-4 space-y-3">
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

                                        <span className="flex-1 ms-3 whitespace-nowrap">Inter School</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

                                        <span className="flex-1 ms-3 whitespace-nowrap">Inter University</span>
                                    </a>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}