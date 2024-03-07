import React from 'react'

const TeamCard = ({
    image,
    name,
    designation,
    description
}) => {
    return (
        <div className="grid md:grid-cols-6 md:gap-4 bg-blue-50 p-3 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 rounded-lg" src={image} />
            <h3 className="font-bold">{name}</h3>
            <p className="text-slate-600 text-wrap">{designation}</p>
          </div>
          <div className="md:col-span-5 justify-items-center">
            <p>{description}</p>
          </div>
        </div>
      )

}

export default TeamCard
