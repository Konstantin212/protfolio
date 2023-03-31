import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

interface Props {
  name: string
  value: number
}

const SkillCircle = ({ name, value }: Props) => {
  return (
    <div className="w-1/2 p-5 md:w-1/4">
      <div className="m-auto h-[120px] w-[120px] md:h-[160px] md:w-[160px]">
        <PieChart
          data={[
            { value: value, color: '#E38627' },
            { value: 100 - value, color: '#eee' },
          ]}
          totalValue={100}
          startAngle={-90}
          lineWidth={5}
          label={({ x, y, dx, dy }) => (
            <>
              <text
                x={x}
                y={y - 5}
                dx={dx}
                dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                style={{
                  fontSize: 10,
                }}
              >
                {name}
              </text>
              <text
                x={x}
                y={y + 7}
                dx={dx}
                dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                style={{
                  fontSize: 10,
                }}
              >
                {value + '%'}
              </text>
            </>
          )}
          labelPosition={0}
        />
      </div>
    </div>
  )
}

export default SkillCircle
