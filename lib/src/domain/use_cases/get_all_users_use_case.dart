import '../entities/user.dart';
import '../repositories/user_repository.dart';

class GetAllUsersUseCase {
  GetAllUsersUseCase(this.userRepository);

  final UserRepository userRepository;

  Future<List<User>> execute() {
    return userRepository.getAllUsers();
  }
}
