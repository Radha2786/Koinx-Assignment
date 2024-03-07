import React from 'react'
import TeamCard from '../components/TeamCard'

const Team = () => {
    const data = [
        {
            image: 'https://images.unsplash.com/photo-1591129963877-355ab1c66e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNlbGVicml0aWVzfGVufDB8fDB8fHww',
            name: 'Jhon Smith',
            designation: 'CEO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus officiis voluptate obcaecati reiciendis corporis minus quia nostrum pariatur provident expedita nam a, maxime consectetur? Inventore vel ratione officia omnis'

        },
        {
            image: 'https://media.istockphoto.com/id/504984676/photo/success-thumbs-up.webp?b=1&s=170667a&w=0&k=20&c=ndXseXq-I2kG9qVrnt7z1OE3exI6NhPh6d1F8Wpgk7c=',
            name: 'Ariana Grande',
            designation: 'CEO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus officiis voluptate obcaecati reiciendis corporis minus quia nostrum pariatur provident expedita nam a, maxime consectetur? Inventore vel ratione officia omnis'

        },
        {
            image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Tom Hanks',
            designation: 'CEO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus officiis voluptate obcaecati reiciendis corporis minus quia nostrum pariatur provident expedita nam a, maxime consectetur? Inventore vel ratione officia omnis'
        }
    ]
    return (
        <div className=' border-2 pl-7 bg-white'>
            <h2 className='text-black text-xl font-semibold'>Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus officiis voluptate obcaecati reiciendis corporis minus quia nostrum pariatur provident expedita nam a, maxime consectetur? Inventore vel ratione officia omnis?
                Repellendulojm.</p>
                <div className='flex flex-col justify-between gap-10 items-center'>
                    {data.map((ele,index)=>(
                        <TeamCard
                        key={index}
                        image={ele.image}
                        name={ele.name}
                        designation={ele.designation}
                        description={ele.description}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Team
