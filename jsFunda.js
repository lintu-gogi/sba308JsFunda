// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
 /* function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);*/

  //Create an array with learner Id's
  const learner_Ids=getLeanerIds(LearnerSubmissions);
  function getLeanerIds(LearnerSubmissions){
    let ids=[];
    LearnerSubmissions.forEach(element => {
        ids.push(element.learner_id);
        
    });
    //Eliminating Duplicates
    let nodupliIds=[...new Set(ids)];
    console.log(nodupliIds+" Learner idsss");
    return nodupliIds;
  }
  console.log("Leaner id "+learner_Ids);
  //const maxPoints=getPointsPossible(2);
  function getPointsPossible(assignId){
    let aobj=AssignmentGroup.assignments;
    let maxPoint;
    for(let i=0;i<aobj.length;i++){
        if(aobj[i].id==assignId){
            maxPoint=aobj[i].points_possible;
           // console.log("Points Possible = "+maxPoint);
        }
        //console.log(aobj[i]);
    }
    return maxPoint;
  }
  //console.log(maxPoints);
  //const assignIdList=getAssignIds(125);
  //console.log(assignIdList);
  function getAssignIds(lid){
    let assignIdLocal=[];
    LearnerSubmissions.forEach(element => {
        if(element.learner_id==lid)
        assignIdLocal.push(element.assignment_id);
        
    });
    //console.log(assignIdLocal);
    return assignIdLocal;
  }
  function getScoreFromLeanerSub(lid,assignId){
    let getScoreLocal=[];
    LearnerSubmissions.forEach(element => {
        if(element.learner_id==lid && element.assignment_id==assignId)
            getScoreLocal.push(element.submission.score);
        
    });
    //console.log(assignIdLocal);
    return getScoreLocal;
  }
  //Main Function
  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    if(CourseInfo.id!=AssignmentGroup.course_id)
        {
            throw new Error("Mismatching course Id, Input is invalid")
            console.log("Error");
        }
    console.log("Main Function1");
    console.log(learner_Ids);
    let finalArray= new Array();
    for(let i=0;i<learner_Ids.length;i++){
        let finalObjects=new Object();
        let lid=learner_Ids[i];  
        let assignIds=  getAssignIds(lid);
        console.log(assignIds);
        let scoreSum=0;
        let pointMaxSum=0;
        let average=0;
        finalObjects['id']=lid;
        console.log(finalObjects);
        for(let j=0;j<assignIds.length;j++)
            {
                console.log(assignIds[j]);
                let score=getScoreFromLeanerSub(lid,assignIds[j]);
                let pointMax=getPointsPossible(assignIds[j]);
                let averageLocal=parseInt(score)/pointMax;
                scoreSum=scoreSum+parseInt(score);
                pointMaxSum=pointMaxSum+pointMax;
                console.log(averageLocal);
                let aid=parseInt(assignIds[j]);
                finalObjects[aid]=averageLocal.toFixed(3);
                console.log("Score= "+score+" Point Max= "+pointMax);

            }
            console.log("scoreSum= "+scoreSum+" PointMaxSum= "+pointMaxSum);
            average=scoreSum/pointMaxSum
            console.log("Average= "+average);
            finalObjects['ave']=average.toFixed(3);
        //console.log("Main Function2");
        //console.log(assignIds);
        finalArray.push(finalObjects);
    }
    //console.log(finalArray);
   //let finalArray= new Array();
   //let finalObjects=new Object();
   
    return finalArray;
    
  }

  try {
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
 
  //console.log(result);
  
  