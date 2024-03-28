
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getRead } from '../../Utilities/getData';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


// other data
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PageToRead = () => {
    const [readBook, setReadBook] = useState([])

    useEffect(() => {
        const loadData = getRead()
        setReadBook(loadData)
    }, [])

    return (
        <div className='bg-[#13131308] h-[calc(100vh-125px)] mt-4 flex justify-center items-center rounded-xl'>
            <ResponsiveContainer>
                <BarChart
                    width={1270}
                    height={500}
                    data={readBook}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'bookName'} />
                    <YAxis />
                    <Bar dataKey={'totalPages'} fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBook.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default PageToRead;