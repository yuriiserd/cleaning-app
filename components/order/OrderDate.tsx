import ReactDatePicker, { registerLocale } from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
registerLocale('de', de);

const hours = [
  '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
]
const minutes = [
  '00', '15', '30', '45'
]
const timeHoursNow = new Date().getHours() + 2;
const timeHours = hours.filter(hour => parseInt(hour) >= timeHoursNow);

export default function OrderDate({
  dates, title
}: {
  dates: {
    [key: string]: number
  }, title: string
}) {

  const [startDate, setStartDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedMonthName, setSelectedMonthName] = useState(selectedMonth.toLocaleString('de', { month: 'long' }));
  const [showMonth, setShowMonth] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [showMinutes, setShowMinutes] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<{hours: string, minutes: string, other: string}>({hours: '7', minutes: '00', other: ""});

  useEffect(() => {
    setSelectedMonthName(selectedMonth.toLocaleString('de', { month: 'long' }))
  }, [selectedMonth])

  const handleMonthChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const monthNumber = new Date(`${target.value} 1, ${new Date().getFullYear()}`);
    setSelectedMonth(monthNumber);
  };
  function handleHoursChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    setSelectedTime(prev => ({
      ...prev,
      hours: target.value
    }))
  }
  function handleMinutesChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    setSelectedTime(prev => ({
      ...prev,
      minutes: target.value
    }))
  }
  
  return (
    <div className="order__date">
      <h3>{title}</h3>
      <div className="order__date__row">
        <div className="order__date__calendar">
          <div className='datePicker'>
            <div className="form-control-flex !mb-0 ">
              <div className="w-full px-2">
                <div className={`flex flex-wrap justify-between z-20 relative border border-[#25435F] rounded-[10px] py-2 px-3 text-[#25435F] text-[18px] font-medium ${showMonth ? "border-b-white rounded-b-none box-border" : ""}`} onClick={() => setShowMonth(!showMonth)}>
                  <span className='!text-[#25435F]'>{selectedMonthName}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  {showMonth && (
                    <div style={{ width: 'calc(100% + 2px)' }}  className='flex flex-col gap-2 absolute top-full bg-white z-10 py-2 px-3 left-[-1px] border border-[#25435F] rounded-[10px] border-t-0 rounded-t-none box-border'>
                      <button onClick={handleMonthChange} className='w-full text-left' value="January">Januar</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="February">Februar</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="March">März</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="April">April</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="May">Mai</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="June">Juni</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="July">Juli</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="August">August</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="September">September</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="October">Oktober</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="November">November</button>
                      <button onClick={handleMonthChange} className='w-full text-left' value="December">Dezember</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <ReactDatePicker 
              locale="de"
              selected={selectedMonth}
              inline
              showDisabledMonthNavigation
              renderDayContents={(day: number, date: Date) => {
                const today = new Date();
                const todayTime = today.getTime();
                const yesterdayTime = todayTime - 86400000; // minus one day
                const serviceDiscount = dates ? dates[`${date.getTime()}`] : undefined;
                if (date.getTime() < yesterdayTime) {
                  return (
                    <div className="day disabled" onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}>{day}</div>
                  )
                } else if (serviceDiscount) {
                  return (
                    <div className={`day discount `} onClick={(e) => {
                      e.preventDefault();
                      setSelectedDate(date);
                    }}>
                      <span className="discount__day">{day}</span> 
                      <span className="discount__item">-{serviceDiscount}%</span>
                    </div>
                  )
                } else {
                  return (
                    <div  className="day" onClick={(e) => {
                      e.preventDefault();
                      setSelectedDate(date);
                    }}>
                      {day}
                    </div>
                  )
                }
              }}
            />
          </div>
        </div>
        <div className="order__date__time">
          <div className={`order__date__time__item ${showHours ? "border-b-white rounded-b-none box-border rounded-t-[10px]" : "rounded-[10px]"}`} onClick={() => setShowHours(!showHours)}>
            <span className='!text-[#25435F]'>{selectedTime?.hours}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            {showHours && (
              <div style={{ width: 'calc(100% + 2px)' }}  className='flex flex-col gap-2 absolute top-full bg-white z-10 py-2 px-3 left-[-1px] border border-[#25435F] rounded-[10px] border-t-0 rounded-t-none box-border'>
                {hours.map(hour => (
                  <button key={hour} onClick={handleHoursChange} className='w-full text-left' value={hour}>{hour}</button>
                ))}
              </div>
            )}
          </div>
          <span className='order__date__time__line'></span>
          <div className={`order__date__time__item ${showMinutes ? "border-b-white rounded-b-none box-border rounded-t-[10px]" : "rounded-[10px]"}`} onClick={() => setShowMinutes(!showMinutes)}>
            <span className='!text-[#25435F]'>{selectedTime?.minutes}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            {showMinutes && (
              <div style={{ width: 'calc(100% + 2px)' }}  className='flex flex-col gap-2 absolute top-full bg-white z-10 py-2 px-3 left-[-1px] border border-[#25435F] rounded-[10px] border-t-0 rounded-t-none box-border'>
                {minutes.map(minute => (
                  <button onClick={handleMinutesChange} className='w-full text-left' value={minute}>{minute}</button>
                ))}
              </div>
            )}
          </div>
          <div className='order__date__time__checkbox'>
            <div className='flex gap-4 mb-8 items-center'>
              <input type="checkbox" name={`checkbox-1`} id={`checkbox-1`}/>
              <label className="radio-label" htmlFor={`checkbox-1`}>Man kann jederzeit beginnen</label>
            </div>
            <div className='flex gap-4 items-center'>
              <input type="checkbox" name={`checkbox-2`} id={`checkbox-2`} />
              <label className="radio-label" htmlFor={`checkbox-2`}>Am Vortag der Reinigung abklären</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}