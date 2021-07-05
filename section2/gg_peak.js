function solution(arr){  
    let answer=0;
    let n=arr.length;
    let dx =[-1,0,1,0];
    let dy =[0,1,0,-1];
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                let flag=1;
                for(let k=0; k<4; k++){
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                        if(nx<n && nx>=0 && ny<n && ny>=0 && arr[nx][ny]>=arr[i][j]){
                            flag = 0;          //nx 범위 n보다 작고 0보다 크고같은거
                                                //다시 생각해보기
                            break;
                        }
                }
                if (flag) answer++;          //대충 알겠어 flag가 true라는 의미이고 
                                //위에서 1일때 true, 0일때 false돼서 break되는거
                                //그니까 if true면 answer++이 되는거지
            }
        }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));