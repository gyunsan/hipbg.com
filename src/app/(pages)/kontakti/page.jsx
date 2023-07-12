
export default function Kontakti() {
    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Свържете се с нас</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                            Всеки може да се обърне за помощ към фондация ХИП-България
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Олга Тушева</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Имейл</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                                            hip.bulgaria.ruse@gmail.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Телефон</dt>
                                        <dd>0896660142 </dd>
                                    </div>
                                </dl>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Адрес</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Русе</h3>
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>4556 Brendan Ferry</p>
                                    <p>Los Angeles, CA 90210</p>
                                </address>
                            </div>
                            <div className="rounded-2xl p-10">

                            </div>
                            <div className="rounded-2xl">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}