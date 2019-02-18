//function to sort strings

function stringSort(str){
    var tmp;
    for(var i=0; i<str.length; i++){
        for(var j=i+1; j<str.length; j++){
            if(str[i]>str[j]){
                tmp=str[i];
                str[i]=str[j];
                str[j]=tmp;
            }
        }
    }
    return str;
}

// To check anagram
function is_anagram(s1,s2){
    //check the length of string
    if(s1.length!==s2.length){
        console.log("strings are not anagrams.");
    }
    else{
        //converts to lowercase
        s1.toLowerCase();
        s2.toLowerCase();
        var i;
        var arr1=[];
        var arr2=[];
        var count=0;
        //To split
        for(i=0;i<s1.length;i++){
            arr1[i]=s1.charAt(i);
            arr2[i]=s2.charAt(i);
        }
        //call sort function
        arr1=stringSort(arr1);
        arr2=stringSort(arr2);

        //check if string matches
        for(i=0;i<arr1.length; i++){
            if(arr1[i]!==arr2[i]){
                count++;
            }
        }
        if(count>0){
            console.log("strings are not anagrams.")
        }
        else{
            console.log("strings are anagrams.")
        }

    }
}


//calling function with different test cases

is_anagram('arm','elbow');

is_anagram('cellar','recall');