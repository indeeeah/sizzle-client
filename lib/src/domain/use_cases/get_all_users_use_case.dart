import '../entities/user.dart';
import '../repositories/user_repository.dart';

class GetAllUsersUseCase {
  final UserRepository userRepository;

  GetAllUsersUseCase(this.userRepository);

  Future<List<User>> execute() {
    return userRepository.getAllUsers();
  }
}
