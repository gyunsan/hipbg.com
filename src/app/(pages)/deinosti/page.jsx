import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'Закупуване на Хранителни Продукти',
        description:
            'Събиране и разпределяне на пакетирани хранителни продукти в срок на годност според нуждите на самотни родители, многодетни семейства, сираци и вдовици.',
        icon: HeartIcon,
    },
    {
        name: 'Първи Учебен Ден',
        description:
            'Кампания в помощ на деца за първия учебен ден - набиране и разпределяне на ученически пособия, раници, спортни екипи и обувки.',
        icon: HeartIcon,
    },
    {
        name: 'Осигуряване на Дрехи',
        description:
            'Кампания за събиране на запазени дрехи втора употреба и транспортиране до пунктове за разпределяне в други населени места в област Русе.',
        icon: HeartIcon,
    },
    {
        name: 'Операция Рождествено Дете /ОРД/',
        description:
            'Работа с деца в училища, детски градини, читалища, библиотеки по проект Операция Рождествено Дете, възпитавайки християнски ценности и морал.',
        icon: HeartIcon,
    },
    {
        name: 'Помощ към Бежанци',
        description:
            'Кампания в подкрепа на бежанци от войната, намерили убежище в град Русе. Подпомагането включва хранителни продукти, дрехи и обувки, хигиенни материали, помощ свързана с адаптация към средата - услуги за приобщаване към културната среда.',
        icon: HeartIcon,
    },
]


export default function Dainosti() {
    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Подкрепа от хора към хора
                    </h2>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
