const nemo = ['nemo']
const moneyheist = ['Denver', 'Helsinki', 'Tokyo', 'France', 'Japan', 'India', 'USA', 'Pakistan', 'Russia', 'China'];
const large = new Array(100000).fill('nemo');

function foundMember(array) {
    let t0 = performance.now();
    for (i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Member");
            break;
        }
    }
    let t1 = performance.now();
    console.log(`Call to foundMember took ${t1 - t0} milliseconds.`);
}

foundMember(moneyheist);
//O(n) - Linear Time - Loop happens based on the input array so if the array increases operation increases proportionally

// Total running time of the foundMember function = O(n)
// Any constant in the Big-O representation can be replaced by 1, as it doesn't really matter what constant it is.
// Therefore, O(3(n+1)) becomes O(n+1)
// Similarly, any constant number added or subtracted to n or multiplied or divided by n can also be safely written as just n
// This is because the constant that operates upon n, doesn't depend on n, i.e., the input size
// Therefore, the funchallenge function can be said to be of O(n) or Linear Time Complexity.