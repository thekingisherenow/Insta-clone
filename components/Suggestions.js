import { useEffect, useState, } from "react";
import { faker, Faker } from "@faker-js/faker";


function Suggestions() {

    const [suggestions, setSuggestions] = useState([])



    useEffect(() => {

        const suggestions = [...Array(5)].map((_, i) => (
            {
                id: i,
                avatar: faker.image.avatar(),
                userName: faker.internet.userName(),
                company : faker.company.name()

            }
        ))

        setSuggestions(suggestions)
    }, [])


    return (
        <div className="ml-10 mt-4  ">
            <div className="flex justify-between border
                 p-3 items-center mb-5">

                <h3 className="text-gray-600 text-sm ">
                    Suggestions for you. </h3>
                <button className="text-sm text-blue-400 
        font-semibold">See All</button>
            </div>
        {
            suggestions.map((profile)=>(
                <div key={profile.id}
                className="flex items-center justify-between mt-3">
                    <img 
                    src= {profile.avatar}
                    className= "h-10 w-10 border p-[2px] image-contain rounded-full" />
                    <div className="flex-1 ml-3"> 
                    <h3 
                    className="text-sm font-semibold">{profile.userName}</h3>
                    <h3 
                    className="truncate text-sm text-gray-400">Works at {profile.company}</h3>
                    </div>
                    <button 
                    className="text-sm font-semibold text-blue-400 ">Follow</button>

                </div>

            ))
        }
        </div>);
}

export default Suggestions;