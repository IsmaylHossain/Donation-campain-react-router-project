
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const Statistics = () => {
    const [totalDonation, setDonate] = useState([]);
    const remainingDonation = useLoaderData();
console.log(remainingDonation)
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem("donate"));
        if(donateItems){
            setDonate(donateItems)
        }
        else{
            setDonate([])
        }
    },[]);
console.log(totalDonation)
    const data = [
        { name: "Total Donations", value: totalDonation.length },
        { name: "Donation Remaining", value:remainingDonation.length - totalDonation.length },];
    const COLORS = ["#00c49f", "#ff444a"];
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <>
        <div className="flex justify-center items-center">
            <div className="relative">
                <PieChart width={400} height={500}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}

                        fill="#8884d8"
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-full mx-auto">
                    <p>Your Donation</p>
                    <div className="bg-[#00c49f] rounded-xl"></div>
                    <p>Total Donation</p>
                    <div className="bg-[#ff444a] rounded-xl"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Statistics;