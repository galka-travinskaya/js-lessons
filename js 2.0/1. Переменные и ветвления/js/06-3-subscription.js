/*
* Напиши скрипт проверки подписки пользователя при доступе к контенту
* - Есть 3 типа подписки: free, pro,vip
* - Получить доступ могут только пользователи pro и vip
 */

const sub = 'free';

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к контенту?', canAccessContent);