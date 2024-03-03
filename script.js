"use strict"

let requestAmount = +prompt(`Please provide us your investment amount`)
let requestDepositAmount = +prompt(`Please provide amount to deposit`)
let requestRate = +prompt(`Please provide us your annual percentage rate`)
let requestWithdrawAmount = +prompt(`Please provide amount to withdraw`)
let requestYear = +prompt(`Please provide for how many year you would like to deposit`)

if (requestAmount < requestDepositAmount) {
     alert(` You have got $${requestAmount} on account to deposit so you can't deposit $${requestDepositAmount} because it less than you've got. Try one more time`)
    
} else if (!isNaN(requestAmount) && !isNaN(requestRate) && !isNaN(requestDepositAmount) && !isNaN(requestWithdrawAmount) && !isNaN(requestYear)) {

    function createInvestmentAccount(requestAmount, requestRate) {
        let initialAmount = requestAmount
        let annualInterestRate = requestRate
        let onDepositAmount = 0
        let accountProfit = 0

        function deposit(amount) {
            onDepositAmount += +amount
            initialAmount -= +amount
        }

        function withdraw(amount) {
            onDepositAmount -= +amount
            initialAmount += +amount
        }

        function calculateProfit(years) {

            let usedDeposit = onDepositAmount

            for (let i = 1; i <= years; i++) {
                usedDeposit += (usedDeposit / 100 * annualInterestRate)
                accountProfit = usedDeposit.toFixed(2)
                console.log(accountProfit + " for " + i + " years")  //  посмотреть работает ли правильно сложный процент.
            }
            return Math.round(accountProfit)
        }

        function getAccountInfo() {
            return alert(`
        Your initial amount that left on your account is $${initialAmount}. 
        You put $${onDepositAmount} on deposit account to receive profit from them. 
        You asked to receive ${annualInterestRate} % every year from your deposit. 
        Your total profit will be $${accountProfit} for ${requestYear} years.
        `)
        }

        return {
            deposit: deposit,
            withdraw: withdraw,
            calculateProfit: calculateProfit,
            getAccountInfo: getAccountInfo,
        }
    }

    const myAccount = createInvestmentAccount(requestAmount, requestRate)

    myAccount.deposit(requestDepositAmount)
    myAccount.withdraw(requestWithdrawAmount)  //  Чисто проверить что функция работает корректно
    myAccount.calculateProfit(requestYear)
    myAccount.getAccountInfo()

} else {
    alert(`You have inserted some data that is not a number. Please try one more time again.`)
}

