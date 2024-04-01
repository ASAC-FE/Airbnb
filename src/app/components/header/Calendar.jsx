import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { ko } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'

const pastMonth = new Date()
const css = `
.selected {
  color: white;
  background-color: black;
}

.start-date, .end-date {
  background-color: black;
  border-radius: 50%;
}

.md-date {
  background-color: #E3E2E2;
  border-radius: 0;
  color: black;
}
`

export default function Calendar({onSelectRange}) {
  const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  })

  const handleSelect = (newRange) => {
    setSelectedRange(newRange);
    onSelectRange(newRange);
  }
  
  return (
    <div className="Calendar">
      <style>{css}</style>
      <DayPicker
        id="test"
        mode="range"
        defaultMonth={pastMonth}
        selected={selectedRange}
        numberOfMonths={2}
        locale={ko}
        pagedNavigation
        onSelect={handleSelect}
        modifiersClassNames={{
          selected: 'selected',
          range_end: 'end-date',
          range_middle: 'md-date',
          range_start: 'start-date',
        }}
        modifiers={{
          selected: selectedRange,
        }}
      />
    </div>
  )
}
