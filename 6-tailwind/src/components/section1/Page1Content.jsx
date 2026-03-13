import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className="pb-20 pt-6 px-18 h-[90vh] flex gap-10 item-center ">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
}

export default Page1Content