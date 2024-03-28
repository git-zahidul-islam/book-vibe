
const RequestBook = () => {
    return (
        <div>
            <div className="hero py-[38px] bg-base-200">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Book Request</h1>
                        <p className="py-6 text-xl">Please request your <span className="text-green-400">favorite</span> book from us</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Book Name 01</span>
                                </label>
                                <input type="text" placeholder="Book number 01" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Book Name 02</span>
                                </label>
                                <input type="text" placeholder="book number 02" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Book Name 03</span>
                                </label>
                                <input type="text" placeholder="Book name 03" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  text-green-600 text-xl font-bold">Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestBook;