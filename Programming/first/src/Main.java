//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//        int arr[]={1,8,4,2,10,3,2};
//        int maximum_val = arr[0];
//        int ans = 0;
//        for(int i=1 ; i< arr.length ;i=i+1){
//            if(arr[i] > maximum_val){
//                maximum_val = arr[i];
//            }
//            else{
//                if ((maximum_val - arr[i]) > ans){
//                    ans = maximum_val - arr[i];
//                }
//            }
//        }
//        System.out.println(ans);

        // Second question

        int num = 12;
        int k = 3;
        int c = 0;
        for(int i=num ; i>=1 ; i--){
            if(num%i==0){
                c+=1;
                if(k==c){
                    System.out.println(i);
                    break;
                }
            }
        }
        }
    }

