import '../styles/test.scss'
const StickCom:React.FC  = ()=> {
  return (
   <div>
    <div className='head'>
      <div>head</div>
      <div>head</div>
      <div>head</div>
    </div>
    <div className='wrap-con'>
      <div className='wrap sticky-container' >
        <div className='item'>123</div>
        <div className='item'>123</div>
        <div className='item'>123</div>
        <div className='item'>123</div>
      </div>
      <div className='content'>
      <p className='p'>content</p>
      </div>      
    </div>
   </div>
  )
}
export default StickCom;