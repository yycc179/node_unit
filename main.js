/**
 * Created by yangyang on 2016/4/25.
 
	* �� n === 0 ʱ������ 0��n === 1ʱ������ 1;
	* n > 1 ʱ������ `fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)`���� `fibonacci(10) === 55`;
	* n ���ɴ���10�������״����Ҫ��
	* n Ҳ����С�� 0�������״���Ϊû���塣
	* n ��Ϊ����ʱ�������״�
 */
 
var fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

		if (typeof n !== 'number') {
		  throw new Error('n should be a Number');
		}
		if (n < 0) {
		  throw new Error('n should >= 0')
		}
		if (n > 10) {
		  throw new Error('n should <= 10');
		}

    return fibonacci(n - 1) + fibonacci(n - 2);
};

exports.fibonacci = fibonacci;
if (require.main === module) {
    var n = Number(process.argv[2]);
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}