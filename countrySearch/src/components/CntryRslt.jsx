import CntryFlag from "./CntryFlag";
import CntryInfo from "./CntryInfo";
import Cntrysrch from "./cntrySrch";

function CntryRslt() {
  return (
    <div className="bg-slate-200 p-8 rounded-2xl">
      <Cntrysrch />
      <CntryFlag
        src= 'src/assets/rw.jpg'
        name= 'RWANDA'
      />
      <CntryInfo 
        Capital= 'Kigali'
        Continent= 'Africa'
        Population= '12952209'
        CL= 'English, French, Kinyarwanda'

      />
    </div>
  )
}

export default CntryRslt
