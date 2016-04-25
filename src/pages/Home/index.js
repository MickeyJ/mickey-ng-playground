
export default () =>{
  require('./home.scss');
  return{
    url: '/',
    template: require('./home.html'),
    controller:
      ['$scope',
        ($scope) =>{

          $scope.title = 'Hello!'

        }
      ]
  }
}