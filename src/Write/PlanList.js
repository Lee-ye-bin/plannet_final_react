import PlanItem from "./PlanItem";

const PlanList = ({planList, setPlanList}) => {    
    return(
        <ul>
            {planList && planList.map((planItem) => {
                console.log(planList);
                if(planItem.deleted) return null;
                else return(
                    <PlanItem 
                    key={planItem.key} // planList의 id(Plan 엔티티의 planNo에 해당)를 key로 수정해서 key로 바꿔줌
                    planItem={planItem} 
                    planList={planList} 
                    setPlanList={setPlanList}/> 
                );
            })}
        </ul>
    );
}

export default PlanList;