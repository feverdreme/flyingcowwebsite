import React from 'react';

type InfoType = {
    title: string;
    info: string[]
};

const Info: InfoType[] = [
    {
        title: "Contact Info",
        info: [
            "Phone: 555-555-5555",
            "Email: s23btaub@severnschool.com"
        ]
    },
    {
        title: "Social",
        info: [
            "facebook.com/flyingcoworganics",
            "instagram.com/flyingcowbitch"
        ]
    }
];

const Contacts: React.FC = () => {
    return (
        <div className="container-fluid" style={{backgroundColor: "#DDDDDD"}}>
            <div className="row">
                {Info.map((I: InfoType) => (
                    <div className="col p-3">
                        <h5>{I.title}</h5>

                        {I.info.map((text) => (
                            <h6>{text}</h6>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacts;